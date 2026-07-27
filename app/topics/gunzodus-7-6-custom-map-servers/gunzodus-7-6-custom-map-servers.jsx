import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-7-6-custom-map-servers');
}

export default function Gunzodus76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-7-6-custom-map-servers" />;
}
