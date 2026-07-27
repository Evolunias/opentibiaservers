import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-guide');
}

export default function HighrateNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-guide" />;
}
