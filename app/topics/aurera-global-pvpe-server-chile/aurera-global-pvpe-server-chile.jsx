import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvpe-server-chile');
}

export default function AureraGlobalPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvpe-server-chile" />;
}
