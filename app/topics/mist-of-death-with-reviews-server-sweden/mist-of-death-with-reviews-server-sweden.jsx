import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-sweden');
}

export default function MistOfDeathWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-sweden" />;
}
