import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-usa');
}

export default function TibiaretroWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-usa" />;
}
