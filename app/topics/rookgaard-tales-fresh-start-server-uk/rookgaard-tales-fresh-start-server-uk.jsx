import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-uk');
}

export default function RookgaardTalesFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-uk" />;
}
