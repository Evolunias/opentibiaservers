import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-trashformers-private-server');
}

export default function ActiveTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-trashformers-private-server" />;
}
