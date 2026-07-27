import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-poland');
}

export default function TibianusWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-poland" />;
}
