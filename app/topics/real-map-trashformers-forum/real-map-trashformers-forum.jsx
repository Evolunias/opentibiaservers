import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-trashformers-forum');
}

export default function RealMapTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-trashformers-forum" />;
}
