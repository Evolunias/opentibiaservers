import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-register');
}

export default function WithReviewsBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-register" />;
}
