import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-aurera-global-website');
}

export default function WithReviewsAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-aurera-global-website" />;
}
