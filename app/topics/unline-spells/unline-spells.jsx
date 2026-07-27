import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-spells');
}

export default function UnlineSpellsKeywordPage() {
  return <StaticKeywordPage slug="unline-spells" />;
}
