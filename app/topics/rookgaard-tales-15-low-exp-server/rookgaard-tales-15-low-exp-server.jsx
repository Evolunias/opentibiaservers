import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-15-low-exp-server');
}

export default function RookgaardTales15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-15-low-exp-server" />;
}
