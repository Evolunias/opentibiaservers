import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-with-reviews-server');
}

export default function Tibiaretro12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-with-reviews-server" />;
}
