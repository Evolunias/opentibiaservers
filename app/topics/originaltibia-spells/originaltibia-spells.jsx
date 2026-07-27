import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-spells');
}

export default function OriginaltibiaSpellsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-spells" />;
}
