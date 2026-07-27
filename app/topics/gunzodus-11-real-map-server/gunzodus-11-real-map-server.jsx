import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-real-map-server');
}

export default function Gunzodus11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-real-map-server" />;
}
