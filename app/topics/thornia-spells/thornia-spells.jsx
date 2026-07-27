import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-spells');
}

export default function ThorniaSpellsKeywordPage() {
  return <StaticKeywordPage slug="thornia-spells" />;
}
