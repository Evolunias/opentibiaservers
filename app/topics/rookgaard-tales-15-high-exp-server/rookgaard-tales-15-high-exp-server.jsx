import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-high-exp-server');
}

export default function RookgaardTales15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-high-exp-server" />;
}
