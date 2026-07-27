import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-forum');
}

export default function TopTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-forum" />;
}
