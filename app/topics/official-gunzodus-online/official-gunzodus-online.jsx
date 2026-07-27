import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-gunzodus-online');
}

export default function OfficialGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-gunzodus-online" />;
}
