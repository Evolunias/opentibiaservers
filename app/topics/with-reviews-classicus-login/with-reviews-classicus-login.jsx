import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-login');
}

export default function WithReviewsClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-login" />;
}
