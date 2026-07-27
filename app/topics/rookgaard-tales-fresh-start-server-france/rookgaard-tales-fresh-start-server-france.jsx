import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-france');
}

export default function RookgaardTalesFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-france" />;
}
