import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-guide');
}

export default function HighrateRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-guide" />;
}
