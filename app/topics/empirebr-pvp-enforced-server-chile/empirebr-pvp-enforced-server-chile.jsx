import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-enforced-server-chile');
}

export default function EmpirebrPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-enforced-server-chile" />;
}
