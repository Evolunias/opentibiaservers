import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-download-chile');
}

export default function LowExpDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="low-exp-download-chile" />;
}
