import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-brazil');
}

export default function MistOfDeathWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-brazil" />;
}
