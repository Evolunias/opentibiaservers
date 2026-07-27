import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-spells');
}

export default function RealeraSpellsKeywordPage() {
  return <StaticKeywordPage slug="realera-spells" />;
}
