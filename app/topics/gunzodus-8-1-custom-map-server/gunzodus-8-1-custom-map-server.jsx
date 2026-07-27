import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-1-custom-map-server');
}

export default function Gunzodus81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-1-custom-map-server" />;
}
