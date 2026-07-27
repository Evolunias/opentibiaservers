import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thornia-official');
}

export default function WithReviewsThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thornia-official" />;
}
