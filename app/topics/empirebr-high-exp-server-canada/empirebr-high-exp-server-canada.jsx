import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-canada');
}

export default function EmpirebrHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-canada" />;
}
