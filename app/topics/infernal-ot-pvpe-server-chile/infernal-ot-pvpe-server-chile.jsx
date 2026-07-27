import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-chile');
}

export default function InfernalOtPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-chile" />;
}
