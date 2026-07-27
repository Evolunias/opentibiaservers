import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-uk');
}

export default function MistOfDeathWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-uk" />;
}
