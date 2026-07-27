import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-official');
}

export default function WithReviewsRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-official" />;
}
