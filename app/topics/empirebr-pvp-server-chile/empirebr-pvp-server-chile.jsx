import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvp-server-chile');
}

export default function EmpirebrPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvp-server-chile" />;
}
