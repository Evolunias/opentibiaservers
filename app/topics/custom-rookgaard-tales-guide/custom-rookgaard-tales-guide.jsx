import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rookgaard-tales-guide');
}

export default function CustomRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-rookgaard-tales-guide" />;
}
