import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-forum');
}

export default function PopularTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-forum" />;
}
