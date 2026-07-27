import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-6-real-map-server');
}

export default function Gunzodus86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-6-real-map-server" />;
}
