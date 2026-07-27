import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-venoreot-rules');
}

export default function HighrateVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-venoreot-rules" />;
}
