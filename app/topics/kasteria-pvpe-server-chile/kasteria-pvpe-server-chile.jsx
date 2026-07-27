import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvpe-server-chile');
}

export default function KasteriaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvpe-server-chile" />;
}
