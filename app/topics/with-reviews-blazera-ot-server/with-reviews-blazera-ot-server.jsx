import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-ot-server');
}

export default function WithReviewsBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-ot-server" />;
}
