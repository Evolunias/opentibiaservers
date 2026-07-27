import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-rules');
}

export default function HighrateNilotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-rules" />;
}
