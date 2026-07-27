import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-6-with-reviews-server');
}

export default function MistOfDeath76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-6-with-reviews-server" />;
}
