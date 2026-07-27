import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-germany');
}

export default function EmpirebrHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-germany" />;
}
