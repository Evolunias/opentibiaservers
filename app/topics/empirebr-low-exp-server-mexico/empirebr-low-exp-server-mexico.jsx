import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-mexico');
}

export default function EmpirebrLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-mexico" />;
}
