import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-4-custom-map-servers');
}

export default function Gunzodus74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-4-custom-map-servers" />;
}
