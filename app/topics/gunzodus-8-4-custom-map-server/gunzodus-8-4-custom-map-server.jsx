import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-custom-map-server');
}

export default function Gunzodus84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-custom-map-server" />;
}
