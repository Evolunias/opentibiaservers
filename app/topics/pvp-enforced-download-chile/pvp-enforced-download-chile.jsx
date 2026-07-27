import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-download-chile');
}

export default function PvpEnforcedDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-download-chile" />;
}
