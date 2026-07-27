import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-with-reviews-server');
}

export default function MistOfDeath14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-with-reviews-server" />;
}
