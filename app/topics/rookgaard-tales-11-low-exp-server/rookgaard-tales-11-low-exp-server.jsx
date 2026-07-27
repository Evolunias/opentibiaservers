import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-11-low-exp-server');
}

export default function RookgaardTales11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-11-low-exp-server" />;
}
