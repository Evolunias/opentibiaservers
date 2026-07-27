import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-register');
}

export default function WithReviewsNostaltherRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-register" />;
}
