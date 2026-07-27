import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-register');
}

export default function WithReviewsSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-register" />;
}
