import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvpe-server-chile');
}

export default function NtoStarPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvpe-server-chile" />;
}
