import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-poland');
}

export default function EmpirebrLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-poland" />;
}
