import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-ots');
}

export default function RookgaardTalesOtsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-ots" />;
}
