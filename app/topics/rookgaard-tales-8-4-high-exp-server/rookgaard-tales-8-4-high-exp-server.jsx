import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-4-high-exp-server');
}

export default function RookgaardTales84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-4-high-exp-server" />;
}
