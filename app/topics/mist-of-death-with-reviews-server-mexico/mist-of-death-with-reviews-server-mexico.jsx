import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-with-reviews-server-mexico');
}

export default function MistOfDeathWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-with-reviews-server-mexico" />;
}
