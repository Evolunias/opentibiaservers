import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-ot-server');
}

export default function CurrentVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-ot-server" />;
}
