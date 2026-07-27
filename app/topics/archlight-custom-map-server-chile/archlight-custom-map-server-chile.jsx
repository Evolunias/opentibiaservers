import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-server-chile');
}

export default function ArchlightCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-server-chile" />;
}
