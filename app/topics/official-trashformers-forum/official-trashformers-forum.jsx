import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-trashformers-forum');
}

export default function OfficialTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="official-trashformers-forum" />;
}
