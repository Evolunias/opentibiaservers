import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-15-real-map-servers');
}

export default function Gunzodus15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-15-real-map-servers" />;
}
