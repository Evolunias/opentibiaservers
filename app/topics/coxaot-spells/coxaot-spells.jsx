import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-spells');
}

export default function CoxaotSpellsKeywordPage() {
  return <StaticKeywordPage slug="coxaot-spells" />;
}
