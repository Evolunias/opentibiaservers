import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-download-chile');
}

export default function PvpeDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-download-chile" />;
}
