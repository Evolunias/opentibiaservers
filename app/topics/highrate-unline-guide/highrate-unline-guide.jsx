import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-guide');
}

export default function HighrateUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-guide" />;
}
