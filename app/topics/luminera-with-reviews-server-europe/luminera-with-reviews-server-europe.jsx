import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-europe');
}

export default function LumineraWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-europe" />;
}
