import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-13-low-exp-server');
}

export default function RookgaardTales13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-13-low-exp-server" />;
}
