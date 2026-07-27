import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-spells');
}

export default function RookgaardTalesSpellsKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-spells" />;
}
