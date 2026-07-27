import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-10-0-evo-servers');
}

export default function RookgaardTales100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-10-0-evo-servers" />;
}
