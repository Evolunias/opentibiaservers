import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-high-exp-server-latin-america');
}

export default function RookgaardTalesHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-high-exp-server-latin-america" />;
}
