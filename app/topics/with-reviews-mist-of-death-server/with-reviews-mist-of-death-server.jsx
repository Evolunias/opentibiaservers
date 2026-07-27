import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-server');
}

export default function WithReviewsMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-server" />;
}
