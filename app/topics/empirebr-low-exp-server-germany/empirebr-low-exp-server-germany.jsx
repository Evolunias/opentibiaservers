import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-germany');
}

export default function EmpirebrLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-germany" />;
}
