import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-6-high-exp-server');
}

export default function RookgaardTales86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-6-high-exp-server" />;
}
