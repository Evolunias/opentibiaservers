import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-1-custom-map-servers');
}

export default function Gunzodus71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-1-custom-map-servers" />;
}
