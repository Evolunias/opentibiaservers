import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-poland');
}

export default function RookgaardTalesFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-poland" />;
}
