import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-argentina');
}

export default function RookgaardTalesHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-argentina" />;
}
