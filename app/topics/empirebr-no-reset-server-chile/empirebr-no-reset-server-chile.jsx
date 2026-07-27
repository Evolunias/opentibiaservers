import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-no-reset-server-chile');
}

export default function EmpirebrNoResetServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-no-reset-server-chile" />;
}
