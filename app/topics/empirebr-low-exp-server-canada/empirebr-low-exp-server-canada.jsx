import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-canada');
}

export default function EmpirebrLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-canada" />;
}
