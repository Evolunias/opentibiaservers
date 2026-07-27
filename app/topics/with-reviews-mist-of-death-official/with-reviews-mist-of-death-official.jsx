import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-official');
}

export default function WithReviewsMistOfDeathOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-official" />;
}
