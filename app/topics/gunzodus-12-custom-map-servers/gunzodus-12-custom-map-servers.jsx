import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-custom-map-servers');
}

export default function Gunzodus12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-custom-map-servers" />;
}
