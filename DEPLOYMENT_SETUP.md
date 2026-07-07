# Deployment Setup - Open Tibia Servers

## Architecture

- Frontend: Next.js 14
- Database: Supabase PostgreSQL
- Primary source: otservlist.org
- Future source: OTLand launch threads
- Sync endpoint: `POST /api/sync-servers`

## Database Setup

Run these SQL files in Supabase:

1. `supabase/migrations/001_add_auth_and_users.sql`
2. `supabase/migrations/002_add_external_source_fields.sql`
3. `supabase/migrations/add_sync_logs.sql`
4. `supabase/migrations/003_platform_features.sql`

`001_add_auth_and_users.sql` now creates the base `servers` table if it does not exist. `002_add_external_source_fields.sql` adds source IDs, source URLs, max players, points, source payload JSON, and other imported listing fields.
`003_platform_features.sql` adds account types, claim requests, reviews, listing conversations, community boards, and uptime history.

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SYNC_TOKEN=use-a-long-random-secret
MONITOR_TOKEN=optional-monitor-secret
```

Optional sync controls:

```env
OTSERVLIST_BASE_URL=https://otservlist.org
OTSERVLIST_PAGE_LIMIT=3
OTSERVLIST_INCLUDE_DETAILS=false
OTSERVLIST_DETAIL_LIMIT=25
NEXT_PUBLIC_SERVER_REFRESH_INTERVAL_MS=30000
```

## Manual Sync

```bash
curl -X POST "https://your-domain.com/api/sync-servers" \
  -H "x-sync-token: your-sync-token" \
  -H "Content-Type: application/json" \
  -d "{\"pageLimit\":3,\"includeDetails\":true,\"detailLimit\":25}"
```

Response:

```json
{
  "success": true,
  "source": "otservlist.org",
  "fetched": 120,
  "inserted": 15,
  "updated": 105,
  "failed": 0
}
```

## Scheduled Sync

Use any cron service that can send an HTTP request, such as Netlify Scheduled Functions, cron-job.org, GitHub Actions, or a server cron.

Recommended schedule:

```text
*/30 * * * *
```

Use:

- Method: `POST`
- URL: `https://your-domain.com/api/sync-servers`
- Header: `x-sync-token: your-sync-token`
- Body: `{"pageLimit":5,"includeDetails":false}`

Use detail sync less often because it visits one source detail page per server:

```json
{"pageLimit":5,"includeDetails":true,"detailLimit":100}
```

The frontend updates from SQL changes in two ways:

- Supabase realtime subscription on `public.servers`
- interval refresh controlled by `NEXT_PUBLIC_SERVER_REFRESH_INTERVAL_MS`

The SQL rows still change only when the sync endpoint runs, so a cron trigger is required for continuous autopopulation.

## Uptime Monitoring

Run this endpoint from a separate cron:

```bash
curl -X POST "https://your-domain.com/api/monitor-servers" \
  -H "x-monitor-token: your-monitor-token" \
  -H "Content-Type: application/json" \
  -d "{\"limit\":100,\"timeoutMs\":5000}"
```

It writes `server_uptime_checks` rows and updates `servers.last_monitor_status`, `servers.last_response_time_ms`, and `servers.last_monitor_checked_at`.

## Cloudflare Note

otservlist.org may return a Cloudflare browser challenge to server-side fetches. The sync endpoint detects this and logs a clear failure in `sync_logs` instead of importing bad challenge HTML. If this happens in production, use a browser-capable worker or approved scraping service that can legally access the source, then keep the same `/api/sync-servers` ingestion contract.

## Verify

```sql
SELECT COUNT(*) FROM servers;
SELECT source, COUNT(*) FROM servers GROUP BY source;
SELECT * FROM sync_logs ORDER BY timestamp DESC LIMIT 10;
```

Open the site and confirm the main table shows source, source ID, players/max, points, uptime, client version, and last-seen data.
