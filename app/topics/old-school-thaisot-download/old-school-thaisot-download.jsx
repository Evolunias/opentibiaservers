import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-thaisot-download');
}

export default function OldSchoolThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-thaisot-download" />;
}
