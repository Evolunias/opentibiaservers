import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-players-online');
}

export default function GunzodusPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-players-online" />;
}
