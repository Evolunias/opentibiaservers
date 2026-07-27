import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-argentina');
}

export default function ArcaniarlWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-argentina" />;
}
