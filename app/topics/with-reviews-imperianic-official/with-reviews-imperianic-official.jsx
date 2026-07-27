import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-official');
}

export default function WithReviewsImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-official" />;
}
