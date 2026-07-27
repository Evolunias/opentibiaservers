import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-download-chile');
}

export default function EvoDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="evo-download-chile" />;
}
