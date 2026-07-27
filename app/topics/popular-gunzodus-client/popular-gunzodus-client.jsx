import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-gunzodus-client');
}

export default function PopularGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="popular-gunzodus-client" />;
}
