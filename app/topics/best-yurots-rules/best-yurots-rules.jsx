import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-yurots-rules');
}

export default function BestYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="best-yurots-rules" />;
}
