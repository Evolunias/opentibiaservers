import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-open-tibia');
}

export default function WithReviewsTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-open-tibia" />;
}
