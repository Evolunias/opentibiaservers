import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-0-custom-map-server');
}

export default function Gunzodus80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-0-custom-map-server" />;
}
