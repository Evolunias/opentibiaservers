import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-private-server');
}

export default function TrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-private-server" />;
}
