import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-reviews');
}

export default function NoxiousotReviewsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-reviews" />;
}
