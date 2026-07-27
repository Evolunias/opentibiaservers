import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-serenity-private-server');
}

export default function WithReviewsSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-serenity-private-server" />;
}
