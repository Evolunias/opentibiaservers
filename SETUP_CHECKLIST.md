# Setup Checklist

## Environment

- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `SYNC_TOKEN`

Optional:

- [ ] `OTSERVLIST_PAGE_LIMIT`
- [ ] `OTSERVLIST_INCLUDE_DETAILS`
- [ ] `OTSERVLIST_DETAIL_LIMIT`
- [ ] `NEXT_PUBLIC_SERVER_REFRESH_INTERVAL_MS`

## Database

- [ ] Run `supabase/migrations/001_add_auth_and_users.sql`
- [ ] Run `supabase/migrations/002_add_external_source_fields.sql`
- [ ] Run `supabase/migrations/add_sync_logs.sql`
- [ ] Run `supabase/migrations/003_platform_features.sql`
- [ ] Confirm `servers.source`, `servers.source_id`, `servers.max_players`, `servers.points`, and `servers.source_payload` exist
- [ ] Confirm `server_claims`, `server_reviews`, `server_messages`, `community_topics`, and `server_uptime_checks` exist

## Local Verification

```bash
npm install
npm run build
npm run dev
```

Manual sync:

```bash
curl -X POST "http://localhost:3000/api/sync-servers" \
  -H "x-sync-token: your-sync-token" \
  -H "Content-Type: application/json" \
  -d "{\"pageLimit\":1,\"includeDetails\":false}"
```

## Production Verification

- [ ] Sync endpoint returns JSON, not HTML
- [ ] `sync_logs` has the latest run
- [ ] `servers` has imported `source = 'otservlist.org'` records
- [ ] Homepage table shows source, source ID, players/max, points, client, uptime, and last seen
- [ ] Server detail page shows source mapping and raw source payload
- [ ] Homepage refreshes automatically after SQL updates
- [ ] Claim form appears on unclaimed imported listings
- [ ] Reviews and listing conversation save for signed-in users
- [ ] `/community` loads categories and topics
- [ ] `/api/monitor-servers` records uptime checks when triggered

## Source Mapping

See `SOURCE_SCHEMA_MAPPING.md` for the otservlist.org field mapping and the planned community archive mapping.
