import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-spells');
}

export default function ArcaniarlSpellsKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-spells" />;
}
