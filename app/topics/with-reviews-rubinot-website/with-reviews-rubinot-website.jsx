import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-website');
}

export default function WithReviewsRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-website" />;
}
