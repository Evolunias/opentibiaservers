import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-spells');
}

export default function TibiameSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibiame-spells" />;
}
