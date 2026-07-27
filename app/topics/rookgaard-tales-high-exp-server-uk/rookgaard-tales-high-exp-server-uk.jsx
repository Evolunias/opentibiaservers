import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-uk');
}

export default function RookgaardTalesHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-uk" />;
}
