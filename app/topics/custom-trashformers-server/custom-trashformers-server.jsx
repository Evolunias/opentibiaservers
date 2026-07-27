import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-trashformers-server');
}

export default function CustomTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="custom-trashformers-server" />;
}
