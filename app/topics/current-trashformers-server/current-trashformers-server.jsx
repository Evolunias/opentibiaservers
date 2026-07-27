import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-trashformers-server');
}

export default function CurrentTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="current-trashformers-server" />;
}
