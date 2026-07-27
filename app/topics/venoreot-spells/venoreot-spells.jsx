import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-spells');
}

export default function VenoreotSpellsKeywordPage() {
  return <StaticKeywordPage slug="venoreot-spells" />;
}
