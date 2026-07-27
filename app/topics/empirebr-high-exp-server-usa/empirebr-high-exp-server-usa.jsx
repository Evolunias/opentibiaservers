import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-usa');
}

export default function EmpirebrHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-usa" />;
}
