import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-europe');
}

export default function EmpirebrHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-europe" />;
}
