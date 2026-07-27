import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-south-america');
}

export default function EmpirebrHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-south-america" />;
}
