import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-guide');
}

export default function HighrateNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-guide" />;
}
