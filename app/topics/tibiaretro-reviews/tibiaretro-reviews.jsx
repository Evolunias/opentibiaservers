import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-reviews');
}

export default function TibiaretroReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-reviews" />;
}
