import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-germany');
}

export default function MistOfDeathWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-germany" />;
}
