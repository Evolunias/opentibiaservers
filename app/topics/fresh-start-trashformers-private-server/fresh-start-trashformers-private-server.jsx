import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-trashformers-private-server');
}

export default function FreshStartTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-trashformers-private-server" />;
}
