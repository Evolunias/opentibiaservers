import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-ots');
}

export default function NewTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-ots" />;
}
