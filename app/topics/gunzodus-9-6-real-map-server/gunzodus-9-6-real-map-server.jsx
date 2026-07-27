import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-real-map-server');
}

export default function Gunzodus96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-real-map-server" />;
}
