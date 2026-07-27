import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-download-chile');
}

export default function RealMapDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="real-map-download-chile" />;
}
