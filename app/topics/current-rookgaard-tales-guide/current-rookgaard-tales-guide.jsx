import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rookgaard-tales-guide');
}

export default function CurrentRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="current-rookgaard-tales-guide" />;
}
