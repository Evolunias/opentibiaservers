import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-download-chile');
}

export default function FreshStartDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-download-chile" />;
}
