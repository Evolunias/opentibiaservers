import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-gunzodus-online');
}

export default function CurrentGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-gunzodus-online" />;
}
