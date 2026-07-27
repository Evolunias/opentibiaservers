import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-trailer');
}

export default function RookgaardTalesTrailerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-trailer" />;
}
