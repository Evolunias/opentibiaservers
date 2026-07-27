import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-argentina');
}

export default function EmpirebrHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-argentina" />;
}
