import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-guide');
}

export default function HighrateClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-guide" />;
}
