import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-custom-map-server');
}

export default function Gunzodus96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-custom-map-server" />;
}
