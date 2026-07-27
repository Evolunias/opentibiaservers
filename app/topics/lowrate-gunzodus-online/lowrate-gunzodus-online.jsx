import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-gunzodus-online');
}

export default function LowrateGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-gunzodus-online" />;
}
