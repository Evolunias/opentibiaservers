import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-real-map-server');
}

export default function Gunzodus71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-real-map-server" />;
}
