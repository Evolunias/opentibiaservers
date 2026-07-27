import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-4-with-reviews-server');
}

export default function MistOfDeath84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-4-with-reviews-server" />;
}
