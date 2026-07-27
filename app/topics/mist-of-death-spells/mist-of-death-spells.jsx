import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-spells');
}

export default function MistOfDeathSpellsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-spells" />;
}
