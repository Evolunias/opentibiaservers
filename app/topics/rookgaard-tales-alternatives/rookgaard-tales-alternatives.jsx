import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-alternatives');
}

export default function RookgaardTalesAlternativesKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-alternatives" />;
}
