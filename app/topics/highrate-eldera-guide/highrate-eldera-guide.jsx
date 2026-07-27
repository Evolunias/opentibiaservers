import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-guide');
}

export default function HighrateElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-guide" />;
}
