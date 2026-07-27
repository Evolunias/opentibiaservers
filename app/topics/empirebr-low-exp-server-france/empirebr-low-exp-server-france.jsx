import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-france');
}

export default function EmpirebrLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-france" />;
}
