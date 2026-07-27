import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-non-pvp-server-chile');
}

export default function EmpirebrNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-non-pvp-server-chile" />;
}
