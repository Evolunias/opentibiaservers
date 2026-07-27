import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-latin-america');
}

export default function EmpirebrHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-latin-america" />;
}
