import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-spells');
}

export default function MidhemSpellsKeywordPage() {
  return <StaticKeywordPage slug="midhem-spells" />;
}
