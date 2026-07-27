import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-spells');
}

export default function AureraGlobalSpellsKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-spells" />;
}
