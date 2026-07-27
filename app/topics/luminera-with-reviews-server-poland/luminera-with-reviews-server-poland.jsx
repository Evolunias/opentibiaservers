import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-poland');
}

export default function LumineraWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-poland" />;
}
