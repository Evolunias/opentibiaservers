import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-spells');
}

export default function TibijkaSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-spells" />;
}
