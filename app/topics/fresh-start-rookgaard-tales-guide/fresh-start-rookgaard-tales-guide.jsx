import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rookgaard-tales-guide');
}

export default function FreshStartRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rookgaard-tales-guide" />;
}
