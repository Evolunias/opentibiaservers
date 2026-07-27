import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-argentina');
}

export default function MistOfDeathWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-argentina" />;
}
