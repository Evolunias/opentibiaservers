import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-ot-server');
}

export default function WithReviewsSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-ot-server" />;
}
