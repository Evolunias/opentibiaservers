import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rookgaard-tales-guide');
}

export default function BestRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="best-rookgaard-tales-guide" />;
}
