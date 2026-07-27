import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-spells');
}

export default function SerenitySpellsKeywordPage() {
  return <StaticKeywordPage slug="serenity-spells" />;
}
