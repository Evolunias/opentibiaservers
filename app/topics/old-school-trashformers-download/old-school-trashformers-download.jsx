import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-download');
}

export default function OldSchoolTrashformersDownloadKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-download" />;
}
