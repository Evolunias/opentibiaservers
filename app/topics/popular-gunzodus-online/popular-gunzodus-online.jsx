import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-online');
}

export default function PopularGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-online" />;
}
