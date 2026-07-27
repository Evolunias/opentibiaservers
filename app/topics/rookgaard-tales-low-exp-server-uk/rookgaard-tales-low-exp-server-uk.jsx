import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-low-exp-server-uk');
}

export default function RookgaardTalesLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-low-exp-server-uk" />;
}
