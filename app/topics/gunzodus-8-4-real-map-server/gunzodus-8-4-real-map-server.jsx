import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-real-map-server');
}

export default function Gunzodus84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-real-map-server" />;
}
