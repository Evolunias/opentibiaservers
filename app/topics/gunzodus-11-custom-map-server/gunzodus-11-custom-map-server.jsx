import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-custom-map-server');
}

export default function Gunzodus11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-custom-map-server" />;
}
