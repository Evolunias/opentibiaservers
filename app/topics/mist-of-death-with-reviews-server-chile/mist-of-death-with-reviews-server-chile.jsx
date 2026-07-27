import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-chile');
}

export default function MistOfDeathWithReviewsServerChileKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-chile" />;
}
