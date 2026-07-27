import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-gunzodus-online');
}

export default function TopGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-gunzodus-online" />;
}
