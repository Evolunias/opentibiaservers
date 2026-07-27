import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-latin-america-servers');
}

export default function RookgaardTalesLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-latin-america-servers" />;
}
