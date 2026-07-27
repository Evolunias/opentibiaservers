import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-with-reviews-server');
}

export default function Tibiaretro100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-with-reviews-server" />;
}
