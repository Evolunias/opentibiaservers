import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-trashformers-private-server');
}

export default function TopTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-trashformers-private-server" />;
}
