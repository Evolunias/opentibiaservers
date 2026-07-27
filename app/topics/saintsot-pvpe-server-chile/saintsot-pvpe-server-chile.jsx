import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvpe-server-chile');
}

export default function SaintsotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvpe-server-chile" />;
}
