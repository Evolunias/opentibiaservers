import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-evo-servers');
}

export default function RookgaardTales84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-evo-servers" />;
}
