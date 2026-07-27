import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-rules');
}

export default function HighrateEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-rules" />;
}
