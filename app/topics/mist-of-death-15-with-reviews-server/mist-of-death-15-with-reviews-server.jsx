import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-with-reviews-server');
}

export default function MistOfDeath15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-with-reviews-server" />;
}
