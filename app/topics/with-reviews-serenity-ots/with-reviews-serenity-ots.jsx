import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-ots');
}

export default function WithReviewsSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-ots" />;
}
