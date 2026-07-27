import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-trashformers-private-server');
}

export default function BestTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-trashformers-private-server" />;
}
