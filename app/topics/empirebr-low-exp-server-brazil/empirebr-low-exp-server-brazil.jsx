import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-brazil');
}

export default function EmpirebrLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-brazil" />;
}
