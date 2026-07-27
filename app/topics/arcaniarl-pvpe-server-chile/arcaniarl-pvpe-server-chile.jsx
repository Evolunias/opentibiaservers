import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvpe-server-chile');
}

export default function ArcaniarlPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvpe-server-chile" />;
}
