import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-private-server');
}

export default function CustomTrashformersPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-private-server" />;
}
