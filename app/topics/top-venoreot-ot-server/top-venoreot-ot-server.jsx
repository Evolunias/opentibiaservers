import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-ot-server');
}

export default function TopVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-ot-server" />;
}
