import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-official');
}

export default function WithReviewsBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-official" />;
}
