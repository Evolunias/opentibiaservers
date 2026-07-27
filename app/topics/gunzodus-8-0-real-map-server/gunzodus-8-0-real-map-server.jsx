import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-real-map-server');
}

export default function Gunzodus80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-real-map-server" />;
}
