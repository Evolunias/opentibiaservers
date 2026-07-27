import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-ot-server');
}

export default function FreshStartVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-ot-server" />;
}
