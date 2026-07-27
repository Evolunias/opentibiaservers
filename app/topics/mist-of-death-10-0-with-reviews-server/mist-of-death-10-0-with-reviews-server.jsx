import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-0-with-reviews-server');
}

export default function MistOfDeath100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-0-with-reviews-server" />;
}
