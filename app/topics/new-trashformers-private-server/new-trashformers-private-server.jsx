import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-private-server');
}

export default function NewTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-private-server" />;
}
