import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-download');
}

export default function OldSchoolCarlinotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-download" />;
}
