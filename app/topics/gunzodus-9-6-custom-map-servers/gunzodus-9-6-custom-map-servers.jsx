import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-9-6-custom-map-servers');
}

export default function Gunzodus96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-9-6-custom-map-servers" />;
}
