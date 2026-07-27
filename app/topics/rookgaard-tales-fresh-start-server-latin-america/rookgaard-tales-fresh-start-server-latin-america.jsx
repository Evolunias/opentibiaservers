import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-latin-america');
}

export default function RookgaardTalesFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-latin-america" />;
}
