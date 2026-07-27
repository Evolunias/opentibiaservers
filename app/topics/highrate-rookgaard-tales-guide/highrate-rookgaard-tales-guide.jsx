import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rookgaard-tales-guide');
}

export default function HighrateRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-rookgaard-tales-guide" />;
}
