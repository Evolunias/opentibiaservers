import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-trashformers');
}

export default function NewTrashformersKeywordPage() {
  return <StaticKeywordPage slug="new-trashformers" />;
}
