import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-with-reviews-server-france');
}

export default function ArcaniarlWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-with-reviews-server-france" />;
}
