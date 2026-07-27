import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-server-chile');
}

export default function ArchlightRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-server-chile" />;
}
