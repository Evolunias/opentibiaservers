import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-rules');
}

export default function HighrateOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-rules" />;
}
