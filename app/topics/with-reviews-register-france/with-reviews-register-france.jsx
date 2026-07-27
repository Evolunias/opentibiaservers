import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-register-france');
}

export default function WithReviewsRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-register-france" />;
}
