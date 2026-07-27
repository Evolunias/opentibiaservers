import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-trashformers-private-server');
}

export default function PopularTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-trashformers-private-server" />;
}
