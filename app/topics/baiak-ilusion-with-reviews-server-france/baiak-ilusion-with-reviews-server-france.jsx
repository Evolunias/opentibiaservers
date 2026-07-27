import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-with-reviews-server-france');
}

export default function BaiakIlusionWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-with-reviews-server-france" />;
}
