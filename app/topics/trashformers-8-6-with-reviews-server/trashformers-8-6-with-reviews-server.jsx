import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('trashformers-8-6-with-reviews-server');
}

export default function Trashformers86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="trashformers-8-6-with-reviews-server" />;
}
