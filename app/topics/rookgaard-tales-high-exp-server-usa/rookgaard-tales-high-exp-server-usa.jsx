import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-usa');
}

export default function RookgaardTalesHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-usa" />;
}
