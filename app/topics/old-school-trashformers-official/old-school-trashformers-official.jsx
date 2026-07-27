import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-official');
}

export default function OldSchoolTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-official" />;
}
