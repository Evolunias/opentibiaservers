import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-spells');
}

export default function CanobSpellsKeywordPage() {
  return <StaticKeywordPage slug="canob-spells" />;
}
