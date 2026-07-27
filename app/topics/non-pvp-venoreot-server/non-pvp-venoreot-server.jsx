import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-venoreot-server');
}

export default function NonPvpVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-venoreot-server" />;
}
