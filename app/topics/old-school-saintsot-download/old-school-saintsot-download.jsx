import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-saintsot-download');
}

export default function OldSchoolSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-saintsot-download" />;
}
