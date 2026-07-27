import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-spells');
}

export default function SaintsotSpellsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-spells" />;
}
