import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales');
}

export default function RookgaardTalesKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales" />;
}
