import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-with-reviews-server');
}

export default function Tibiaretro76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-with-reviews-server" />;
}
