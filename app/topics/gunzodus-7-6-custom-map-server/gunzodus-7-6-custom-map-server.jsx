import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-custom-map-server');
}

export default function Gunzodus76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-custom-map-server" />;
}
