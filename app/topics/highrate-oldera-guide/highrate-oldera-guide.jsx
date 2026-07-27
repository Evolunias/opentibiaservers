import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-guide');
}

export default function HighrateOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-guide" />;
}
