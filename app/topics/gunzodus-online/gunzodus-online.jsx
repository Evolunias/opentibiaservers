import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-online');
}

export default function GunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-online" />;
}
