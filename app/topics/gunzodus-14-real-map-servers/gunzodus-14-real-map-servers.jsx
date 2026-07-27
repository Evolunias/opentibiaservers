import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-14-real-map-servers');
}

export default function Gunzodus14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-14-real-map-servers" />;
}
