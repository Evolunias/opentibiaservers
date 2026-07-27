import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-with-reviews-server');
}

export default function Tibiaretro71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-with-reviews-server" />;
}
