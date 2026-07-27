import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-download-chile');
}

export default function SeasonalDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="seasonal-download-chile" />;
}
