import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-8-4-custom-map-servers');
}

export default function Gunzodus84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-8-4-custom-map-servers" />;
}
