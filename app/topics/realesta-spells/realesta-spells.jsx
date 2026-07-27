import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-spells');
}

export default function RealestaSpellsKeywordPage() {
  return <StaticKeywordPage slug="realesta-spells" />;
}
