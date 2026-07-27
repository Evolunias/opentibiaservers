import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-spells');
}

export default function NepreniaSpellsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-spells" />;
}
