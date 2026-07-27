import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-login');
}

export default function WithReviewsNostaltherLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-login" />;
}
