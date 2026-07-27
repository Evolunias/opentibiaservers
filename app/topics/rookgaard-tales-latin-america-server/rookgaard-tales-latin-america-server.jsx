import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-latin-america-server');
}

export default function RookgaardTalesLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-latin-america-server" />;
}
