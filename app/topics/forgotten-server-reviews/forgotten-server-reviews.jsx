import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('forgotten-server-reviews');
}

export default function ForgottenServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="forgotten-server-reviews" />;
}
