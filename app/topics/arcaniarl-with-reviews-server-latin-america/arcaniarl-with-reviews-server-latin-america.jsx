import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-latin-america');
}

export default function ArcaniarlWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-latin-america" />;
}
