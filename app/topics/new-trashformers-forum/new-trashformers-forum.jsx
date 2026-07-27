import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-forum');
}

export default function NewTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-forum" />;
}
