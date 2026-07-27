import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-trashformers-forum');
}

export default function NoResetTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-trashformers-forum" />;
}
