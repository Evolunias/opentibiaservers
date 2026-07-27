import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-spells');
}

export default function OxygenotSpellsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-spells" />;
}
