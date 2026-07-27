import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rookgaard-tales-guide');
}

export default function PopularRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-rookgaard-tales-guide" />;
}
