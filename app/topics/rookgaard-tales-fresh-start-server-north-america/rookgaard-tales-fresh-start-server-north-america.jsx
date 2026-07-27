import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-north-america');
}

export default function RookgaardTalesFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-north-america" />;
}
