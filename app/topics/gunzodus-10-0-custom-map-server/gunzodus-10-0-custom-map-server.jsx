import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-custom-map-server');
}

export default function Gunzodus100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-custom-map-server" />;
}
