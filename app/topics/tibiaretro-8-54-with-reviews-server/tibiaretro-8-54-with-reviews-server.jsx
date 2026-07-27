import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-with-reviews-server');
}

export default function Tibiaretro854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-with-reviews-server" />;
}
