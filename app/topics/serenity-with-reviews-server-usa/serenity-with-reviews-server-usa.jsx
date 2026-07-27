import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-usa');
}

export default function SerenityWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-usa" />;
}
