import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-usa');
}

export default function TrashformersWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-usa" />;
}
