import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-high-exp-server-north-america');
}

export default function EmpirebrHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="empirebr-high-exp-server-north-america" />;
}
