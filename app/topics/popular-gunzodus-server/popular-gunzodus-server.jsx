import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-server');
}

export default function PopularGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-server" />;
}
