import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-poland');
}

export default function EmpirebrHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-poland" />;
}
