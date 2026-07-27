import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-ot');
}

export default function CurrentVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-ot" />;
}
