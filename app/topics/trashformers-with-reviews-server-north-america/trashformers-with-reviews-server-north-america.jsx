import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-north-america');
}

export default function TrashformersWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-north-america" />;
}
