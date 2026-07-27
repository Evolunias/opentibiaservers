import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot');
}

export default function BestVenoreotKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot" />;
}
