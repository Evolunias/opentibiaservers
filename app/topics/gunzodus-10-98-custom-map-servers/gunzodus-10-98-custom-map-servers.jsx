import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-98-custom-map-servers');
}

export default function Gunzodus1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-98-custom-map-servers" />;
}
