import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-download-chile');
}

export default function RetroDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="retro-download-chile" />;
}
