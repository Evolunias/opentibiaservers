import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-spells');
}

export default function EvoluniaSpellsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-spells" />;
}
