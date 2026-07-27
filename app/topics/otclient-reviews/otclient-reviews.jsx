import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-reviews');
}

export default function OtclientReviewsKeywordPage() {
  return <StaticKeywordPage slug="otclient-reviews" />;
}
