import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-ot-server');
}

export default function NewTrashformersOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-ot-server" />;
}
