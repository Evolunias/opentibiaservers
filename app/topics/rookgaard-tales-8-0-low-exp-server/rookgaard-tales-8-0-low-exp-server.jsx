import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-8-0-low-exp-server');
}

export default function RookgaardTales80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-8-0-low-exp-server" />;
}
