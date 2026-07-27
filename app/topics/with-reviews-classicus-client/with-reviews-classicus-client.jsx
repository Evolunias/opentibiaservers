import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-client');
}

export default function WithReviewsClassicusClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-client" />;
}
