import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-with-reviews-server');
}

export default function Tibiaretro86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-with-reviews-server" />;
}
