import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-forum');
}

export default function CustomTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-forum" />;
}
