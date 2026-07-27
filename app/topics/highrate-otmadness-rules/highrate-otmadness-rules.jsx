import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-rules');
}

export default function HighrateOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-rules" />;
}
