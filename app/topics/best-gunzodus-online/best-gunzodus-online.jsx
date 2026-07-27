import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-gunzodus-online');
}

export default function BestGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-gunzodus-online" />;
}
