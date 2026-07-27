import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-guide');
}

export default function HighrateKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-guide" />;
}
