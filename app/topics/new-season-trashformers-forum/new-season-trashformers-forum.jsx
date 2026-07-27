import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-trashformers-forum');
}

export default function NewSeasonTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-trashformers-forum" />;
}
