import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-venoreot-servers');
}

export default function CustomMapVenoreotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-venoreot-servers" />;
}
