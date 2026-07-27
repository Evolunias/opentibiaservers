import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rookgaard-tales-guide');
}

export default function NewRookgaardTalesGuideKeywordPage() {
  return <StaticKeywordPage slug="new-rookgaard-tales-guide" />;
}
