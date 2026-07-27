import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-custom-map-servers-chile');
}

export default function ArchlightCustomMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="archlight-custom-map-servers-chile" />;
}
