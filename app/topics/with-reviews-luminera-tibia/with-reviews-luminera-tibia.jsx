import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-tibia');
}

export default function WithReviewsLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-tibia" />;
}
