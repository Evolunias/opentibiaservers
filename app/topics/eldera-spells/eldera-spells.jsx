import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-spells');
}

export default function ElderaSpellsKeywordPage() {
  return <StaticKeywordPage slug="eldera-spells" />;
}
