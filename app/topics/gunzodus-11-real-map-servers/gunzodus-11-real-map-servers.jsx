import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-11-real-map-servers');
}

export default function Gunzodus11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-11-real-map-servers" />;
}
