import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-rules');
}

export default function BestVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-rules" />;
}
