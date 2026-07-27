import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-spells');
}

export default function OlderaSpellsKeywordPage() {
  return <StaticKeywordPage slug="oldera-spells" />;
}
