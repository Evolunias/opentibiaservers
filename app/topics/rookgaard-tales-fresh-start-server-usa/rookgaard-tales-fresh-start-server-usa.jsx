import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-fresh-start-server-usa');
}

export default function RookgaardTalesFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-fresh-start-server-usa" />;
}
