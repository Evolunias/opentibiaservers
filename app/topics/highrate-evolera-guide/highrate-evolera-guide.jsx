import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-guide');
}

export default function HighrateEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-guide" />;
}
