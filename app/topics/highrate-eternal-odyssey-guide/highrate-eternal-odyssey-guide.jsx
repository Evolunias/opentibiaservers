import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-guide');
}

export default function HighrateEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-guide" />;
}
