import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-spells');
}

export default function TibiantisSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-spells" />;
}
