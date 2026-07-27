import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-download-chile');
}

export default function NonPvpDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-download-chile" />;
}
