import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-download-chile');
}

export default function OldSchoolDownloadChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-download-chile" />;
}
