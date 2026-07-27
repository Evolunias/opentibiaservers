import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-uk');
}

export default function EmpirebrLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-uk" />;
}
