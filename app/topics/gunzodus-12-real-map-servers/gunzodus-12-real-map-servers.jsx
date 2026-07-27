import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-12-real-map-servers');
}

export default function Gunzodus12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-12-real-map-servers" />;
}
