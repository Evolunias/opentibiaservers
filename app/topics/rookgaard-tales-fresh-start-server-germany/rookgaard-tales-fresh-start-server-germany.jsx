import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-germany');
}

export default function RookgaardTalesFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-germany" />;
}
