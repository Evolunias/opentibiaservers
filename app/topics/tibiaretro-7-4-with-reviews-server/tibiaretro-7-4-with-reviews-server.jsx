import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-with-reviews-server');
}

export default function Tibiaretro74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-with-reviews-server" />;
}
