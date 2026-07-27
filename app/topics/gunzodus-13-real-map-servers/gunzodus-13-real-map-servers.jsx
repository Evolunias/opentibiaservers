import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-13-real-map-servers');
}

export default function Gunzodus13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-13-real-map-servers" />;
}
