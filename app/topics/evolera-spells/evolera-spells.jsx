import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-spells');
}

export default function EvoleraSpellsKeywordPage() {
  return <StaticKeywordPage slug="evolera-spells" />;
}
