import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-client');
}

export default function WithReviewsMistOfDeathClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-client" />;
}
