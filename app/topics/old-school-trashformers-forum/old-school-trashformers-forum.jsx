import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-trashformers-forum');
}

export default function OldSchoolTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="old-school-trashformers-forum" />;
}
