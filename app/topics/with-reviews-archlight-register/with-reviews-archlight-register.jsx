import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-register');
}

export default function WithReviewsArchlightRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-register" />;
}
