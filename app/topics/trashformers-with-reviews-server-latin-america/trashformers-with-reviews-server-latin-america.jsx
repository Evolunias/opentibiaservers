import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-latin-america');
}

export default function TrashformersWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-latin-america" />;
}
