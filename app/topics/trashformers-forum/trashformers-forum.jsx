import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-forum');
}

export default function TrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="trashformers-forum" />;
}
