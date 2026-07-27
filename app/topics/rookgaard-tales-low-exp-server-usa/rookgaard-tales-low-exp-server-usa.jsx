import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-low-exp-server-usa');
}

export default function RookgaardTalesLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-low-exp-server-usa" />;
}
