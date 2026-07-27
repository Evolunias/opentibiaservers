import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-custom-map-server');
}

export default function Gunzodus13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-custom-map-server" />;
}
