import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-medivia-download');
}

export default function OldSchoolMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-medivia-download" />;
}
