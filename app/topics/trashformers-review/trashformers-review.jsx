import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-review');
}

export default function TrashformersReviewKeywordPage() {
  return <StaticKeywordPage slug="trashformers-review" />;
}
