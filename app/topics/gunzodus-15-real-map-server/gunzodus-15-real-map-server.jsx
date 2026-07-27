import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-real-map-server');
}

export default function Gunzodus15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-real-map-server" />;
}
