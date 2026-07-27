import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-france');
}

export default function BaiakReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-france" />;
}
