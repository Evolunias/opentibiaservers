import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-reviews');
}

export default function OtServersReviewsKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-reviews" />;
}
