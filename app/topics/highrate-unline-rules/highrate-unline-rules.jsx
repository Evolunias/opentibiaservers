import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-rules');
}

export default function HighrateUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-rules" />;
}
