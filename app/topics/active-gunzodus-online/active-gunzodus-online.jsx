import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-gunzodus-online');
}

export default function ActiveGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-gunzodus-online" />;
}
