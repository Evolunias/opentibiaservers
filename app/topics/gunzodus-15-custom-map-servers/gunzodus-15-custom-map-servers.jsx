import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-custom-map-servers');
}

export default function Gunzodus15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-custom-map-servers" />;
}
