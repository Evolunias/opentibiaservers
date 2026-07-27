import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-spells');
}

export default function TibianusSpellsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-spells" />;
}
