import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-custom-map-servers');
}

export default function Gunzodus14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-custom-map-servers" />;
}
