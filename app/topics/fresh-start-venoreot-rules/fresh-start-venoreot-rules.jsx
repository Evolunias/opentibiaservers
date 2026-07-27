import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-rules');
}

export default function FreshStartVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-rules" />;
}
