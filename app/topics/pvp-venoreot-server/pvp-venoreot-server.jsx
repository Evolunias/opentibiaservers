import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-venoreot-server');
}

export default function PvpVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-venoreot-server" />;
}
