import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-ot');
}

export default function LowrateVenoreotOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-ot" />;
}
