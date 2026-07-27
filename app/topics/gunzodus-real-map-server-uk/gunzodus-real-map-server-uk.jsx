import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-real-map-server-uk');
}

export default function GunzodusRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-real-map-server-uk" />;
}
