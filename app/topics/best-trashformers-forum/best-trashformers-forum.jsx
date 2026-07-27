import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-forum');
}

export default function BestTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-forum" />;
}
