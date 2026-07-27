import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rookgaard-tales-guide');
}

export default function ActiveRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="active-rookgaard-tales-guide" />;
}
