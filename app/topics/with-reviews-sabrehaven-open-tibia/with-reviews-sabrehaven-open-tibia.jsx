import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-open-tibia');
}

export default function WithReviewsSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-open-tibia" />;
}
