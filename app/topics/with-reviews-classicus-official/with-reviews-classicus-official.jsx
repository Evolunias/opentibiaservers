import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-official');
}

export default function WithReviewsClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-official" />;
}
