import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-download-chile');
}

export default function PvpDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-download-chile" />;
}
