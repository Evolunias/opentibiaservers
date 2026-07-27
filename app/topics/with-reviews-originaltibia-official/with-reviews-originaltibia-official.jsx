import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-originaltibia-official');
}

export default function WithReviewsOriginaltibiaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-originaltibia-official" />;
}
