import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-7-4-evo-servers');
}

export default function RookgaardTales74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-7-4-evo-servers" />;
}
