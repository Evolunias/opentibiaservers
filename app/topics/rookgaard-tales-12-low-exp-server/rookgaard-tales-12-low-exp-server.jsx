import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-12-low-exp-server');
}

export default function RookgaardTales12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-12-low-exp-server" />;
}
