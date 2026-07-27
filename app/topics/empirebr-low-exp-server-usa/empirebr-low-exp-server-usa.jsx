import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-usa');
}

export default function EmpirebrLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-usa" />;
}
