import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolunia-ot-server');
}

export default function WithReviewsEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolunia-ot-server" />;
}
