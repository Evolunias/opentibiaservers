import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-download-chile');
}

export default function HighExpDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="high-exp-download-chile" />;
}
