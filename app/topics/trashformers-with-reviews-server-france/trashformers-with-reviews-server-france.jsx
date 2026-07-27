import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-with-reviews-server-france');
}

export default function TrashformersWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="trashformers-with-reviews-server-france" />;
}
