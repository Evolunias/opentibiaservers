import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-brazil');
}

export default function SerenityWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-brazil" />;
}
