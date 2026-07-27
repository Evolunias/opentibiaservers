import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-rules');
}

export default function HighrateYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-rules" />;
}
