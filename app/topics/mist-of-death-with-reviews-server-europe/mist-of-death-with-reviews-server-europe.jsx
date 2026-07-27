import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-europe');
}

export default function MistOfDeathWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-europe" />;
}
