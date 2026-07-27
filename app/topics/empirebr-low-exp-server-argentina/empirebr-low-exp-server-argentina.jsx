import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-argentina');
}

export default function EmpirebrLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-argentina" />;
}
