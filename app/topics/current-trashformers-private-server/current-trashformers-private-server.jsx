import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-private-server');
}

export default function CurrentTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-private-server" />;
}
