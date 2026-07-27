import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-download');
}

export default function OldSchoolRangerSArcaniDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-download" />;
}
