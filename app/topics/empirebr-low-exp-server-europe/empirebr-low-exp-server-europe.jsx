import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-europe');
}

export default function EmpirebrLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-europe" />;
}
