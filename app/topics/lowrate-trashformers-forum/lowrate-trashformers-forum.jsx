import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-trashformers-forum');
}

export default function LowrateTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-trashformers-forum" />;
}
