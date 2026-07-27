import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-download-chile');
}

export default function BaiakDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-download-chile" />;
}
