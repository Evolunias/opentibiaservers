import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-reviews-server-sweden');
}

export default function SerenityWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-reviews-server-sweden" />;
}
