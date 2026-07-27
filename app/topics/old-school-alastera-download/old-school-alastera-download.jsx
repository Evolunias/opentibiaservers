import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-download');
}

export default function OldSchoolAlasteraDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-download" />;
}
