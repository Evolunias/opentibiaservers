import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-client');
}

export default function WithReviewsImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-client" />;
}
