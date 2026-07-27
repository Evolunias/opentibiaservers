import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-real-map-server');
}

export default function Gunzodus12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-real-map-server" />;
}
