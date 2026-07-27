import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-venoreot-server');
}

export default function PvpeVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-venoreot-server" />;
}
