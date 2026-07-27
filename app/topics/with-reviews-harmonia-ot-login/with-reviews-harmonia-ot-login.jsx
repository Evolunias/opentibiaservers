import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-login');
}

export default function WithReviewsHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-login" />;
}
