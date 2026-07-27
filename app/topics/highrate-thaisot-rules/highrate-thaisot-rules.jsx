import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-rules');
}

export default function HighrateThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-rules" />;
}
