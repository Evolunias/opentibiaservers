import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-europe');
}

export default function RookgaardTalesFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-europe" />;
}
