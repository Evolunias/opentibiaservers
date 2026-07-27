import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-spells');
}

export default function EmpirebrSpellsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-spells" />;
}
