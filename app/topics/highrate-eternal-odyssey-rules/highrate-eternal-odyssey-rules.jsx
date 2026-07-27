import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-rules');
}

export default function HighrateEternalOdysseyRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-rules" />;
}
