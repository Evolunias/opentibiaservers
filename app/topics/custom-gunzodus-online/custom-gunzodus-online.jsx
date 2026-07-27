import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-gunzodus-online');
}

export default function CustomGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-gunzodus-online" />;
}
