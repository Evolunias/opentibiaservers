import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-server');
}

export default function NewTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-server" />;
}
