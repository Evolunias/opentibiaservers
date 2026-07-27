import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-chile');
}

export default function EmpirebrPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-chile" />;
}
