import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-wars');
}

export default function RookgaardTalesWarsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-wars" />;
}
