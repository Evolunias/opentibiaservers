import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-spells');
}

export default function TibiascapeSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-spells" />;
}
