import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-mexico');
}

export default function EmpirebrHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-mexico" />;
}
