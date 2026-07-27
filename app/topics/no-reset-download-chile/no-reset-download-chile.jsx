import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-chile');
}

export default function NoResetDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-chile" />;
}
