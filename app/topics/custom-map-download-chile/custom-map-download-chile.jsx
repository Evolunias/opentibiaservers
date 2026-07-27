import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-download-chile');
}

export default function CustomMapDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="custom-map-download-chile" />;
}
