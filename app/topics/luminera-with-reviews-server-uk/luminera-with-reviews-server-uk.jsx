import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-uk');
}

export default function LumineraWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-uk" />;
}
