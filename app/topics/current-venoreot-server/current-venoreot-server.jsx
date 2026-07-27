import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-server');
}

export default function CurrentVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-server" />;
}
