import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rookgaard-tales-guide');
}

export default function TopRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="top-rookgaard-tales-guide" />;
}
