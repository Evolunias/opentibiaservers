import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-custom-map-servers');
}

export default function Gunzodus11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-custom-map-servers" />;
}
