import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-spells');
}

export default function InfernalOtSpellsKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-spells" />;
}
