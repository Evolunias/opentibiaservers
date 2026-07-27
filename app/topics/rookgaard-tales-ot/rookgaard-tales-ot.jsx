import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-ot');
}

export default function RookgaardTalesOtKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-ot" />;
}
