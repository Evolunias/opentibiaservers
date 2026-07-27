import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-spells');
}

export default function CarlinotSpellsKeywordPage() {
  return <StaticKeywordPage slug="carlinot-spells" />;
}
