import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-training');
}

export default function TrashformersTrainingKeywordPage() {
  return <StaticKeywordPage slug="trashformers-training" />;
}
