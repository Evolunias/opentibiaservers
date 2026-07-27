import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-reviews-server-uk');
}

export default function TibianusWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-reviews-server-uk" />;
}
