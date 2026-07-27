import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-north-america');
}

export default function MistOfDeathWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-north-america" />;
}
