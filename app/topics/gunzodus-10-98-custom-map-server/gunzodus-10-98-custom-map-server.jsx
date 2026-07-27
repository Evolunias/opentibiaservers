import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-custom-map-server');
}

export default function Gunzodus1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-custom-map-server" />;
}
