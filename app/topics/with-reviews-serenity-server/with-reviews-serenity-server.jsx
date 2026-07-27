import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-server');
}

export default function WithReviewsSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-server" />;
}
