import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvpe-server-chile');
}

export default function ArchlightPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvpe-server-chile" />;
}
