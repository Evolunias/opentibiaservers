import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-trashformers-forum');
}

export default function HighrateTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-trashformers-forum" />;
}
