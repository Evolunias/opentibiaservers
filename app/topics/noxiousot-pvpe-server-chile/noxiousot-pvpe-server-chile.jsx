import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-chile');
}

export default function NoxiousotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-chile" />;
}
