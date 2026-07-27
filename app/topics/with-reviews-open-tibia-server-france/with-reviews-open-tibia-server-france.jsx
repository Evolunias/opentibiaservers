import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-open-tibia-server-france');
}

export default function WithReviewsOpenTibiaServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-open-tibia-server-france" />;
}
