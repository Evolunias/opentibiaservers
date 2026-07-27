import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-with-reviews-server');
}

export default function Tibiaretro13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-with-reviews-server" />;
}
