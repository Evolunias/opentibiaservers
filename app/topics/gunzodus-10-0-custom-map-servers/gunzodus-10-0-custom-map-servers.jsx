import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-10-0-custom-map-servers');
}

export default function Gunzodus100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-10-0-custom-map-servers" />;
}
