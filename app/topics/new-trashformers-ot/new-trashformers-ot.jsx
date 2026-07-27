import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers-ot');
}

export default function NewTrashformersOtKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers-ot" />;
}
