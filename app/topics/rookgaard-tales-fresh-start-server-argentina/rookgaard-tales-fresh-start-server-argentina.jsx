import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-argentina');
}

export default function RookgaardTalesFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-argentina" />;
}
