import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-spells');
}

export default function TibiaraSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibiara-spells" />;
}
