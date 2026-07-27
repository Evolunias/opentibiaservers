import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-website');
}

export default function WithReviewsDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-website" />;
}
