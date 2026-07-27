import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-real-map-server');
}

export default function Gunzodus13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-real-map-server" />;
}
