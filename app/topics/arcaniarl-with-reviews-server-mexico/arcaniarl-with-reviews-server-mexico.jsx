import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-mexico');
}

export default function ArcaniarlWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-mexico" />;
}
