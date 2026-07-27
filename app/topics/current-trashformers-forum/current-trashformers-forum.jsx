import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-forum');
}

export default function CurrentTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-forum" />;
}
