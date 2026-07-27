import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-rules');
}

export default function HighrateMadnessaliveRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-rules" />;
}
