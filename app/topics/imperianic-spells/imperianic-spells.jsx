import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-spells');
}

export default function ImperianicSpellsKeywordPage() {
  return <StaticKeywordPage slug="imperianic-spells" />;
}
