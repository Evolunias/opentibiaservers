import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-10-0-with-reviews-server');
}

export default function Trashformers100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-10-0-with-reviews-server" />;
}
