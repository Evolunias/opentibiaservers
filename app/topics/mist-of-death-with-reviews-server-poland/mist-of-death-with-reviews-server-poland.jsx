import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-poland');
}

export default function MistOfDeathWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-poland" />;
}
