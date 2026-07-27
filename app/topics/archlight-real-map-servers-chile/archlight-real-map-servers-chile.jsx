import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-real-map-servers-chile');
}

export default function ArchlightRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-real-map-servers-chile" />;
}
