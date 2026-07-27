import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-spells');
}

export default function NostaltherSpellsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-spells" />;
}
