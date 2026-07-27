import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-pvpe-server-chile');
}

export default function TibiamePvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-pvpe-server-chile" />;
}
