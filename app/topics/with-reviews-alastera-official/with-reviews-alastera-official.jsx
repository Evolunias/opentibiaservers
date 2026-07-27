import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-alastera-official');
}

export default function WithReviewsAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-alastera-official" />;
}
