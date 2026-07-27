import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-venoreot-server');
}

export default function CustomMapVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-venoreot-server" />;
}
