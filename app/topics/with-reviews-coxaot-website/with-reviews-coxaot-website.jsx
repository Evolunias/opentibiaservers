import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-coxaot-website');
}

export default function WithReviewsCoxaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-coxaot-website" />;
}
