import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-spells');
}

export default function MiracleSpellsKeywordPage() {
  return <StaticKeywordPage slug="miracle-spells" />;
}
