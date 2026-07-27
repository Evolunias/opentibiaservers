import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-forum');
}

export default function FreshStartTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-forum" />;
}
