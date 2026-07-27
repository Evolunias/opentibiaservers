import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-low-exp-server-chile');
}

export default function EmpirebrLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-low-exp-server-chile" />;
}
