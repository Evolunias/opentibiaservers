import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-sweden');
}

export default function EmpirebrHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-sweden" />;
}
