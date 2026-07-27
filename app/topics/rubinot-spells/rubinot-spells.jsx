import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-spells');
}

export default function RubinotSpellsKeywordPage() {
  return <StaticKeywordPage slug="rubinot-spells" />;
}
