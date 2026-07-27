import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-poland');
}

export default function TibiaretroWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-poland" />;
}
