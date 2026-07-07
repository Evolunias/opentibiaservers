# Sync Automation Setup

The implemented sync path is:

```text
Cron service
  -> POST /api/sync-servers
  -> fetch and parse otservlist.org
  -> upsert public.servers
  -> write public.sync_logs
```

## Endpoint

```text
POST https://your-domain.com/api/sync-servers
```

Headers:

```text
x-sync-token: your-sync-token
Content-Type: application/json
```

Body:

```json
{
  "pageLimit": 5,
  "includeDetails": false,
  "detailLimit": 25
}
```

## Recommended Schedules

Fast list refresh:

```text
*/30 * * * *
```

Deeper detail refresh:

```text
0 */6 * * *
```

Use `includeDetails: true` only for the deeper job because each detail record requires another source-page request.

## Cron Options

Any service that can make an HTTP request works:

- Netlify Scheduled Functions
- GitHub Actions schedule
- cron-job.org
- server cron with `curl`

Example server cron:

```bash
*/30 * * * * curl -sS -X POST "https://your-domain.com/api/sync-servers" -H "x-sync-token: $SYNC_TOKEN" -H "Content-Type: application/json" -d '{"pageLimit":5,"includeDetails":false}'
```

## Monitoring

```sql
SELECT * FROM sync_logs ORDER BY timestamp DESC LIMIT 10;
SELECT source, COUNT(*) FROM servers GROUP BY source;
SELECT name, source_id, players_online, last_seen_at
FROM servers
WHERE source = 'otservlist.org'
ORDER BY last_seen_at DESC
LIMIT 25;
```

If a sync fails because otservlist.org returns a Cloudflare challenge, the endpoint records that failure in `sync_logs.error`.
