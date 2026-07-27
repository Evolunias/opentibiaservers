import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-spells');
}

export default function NtoStarSpellsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-spells" />;
}
