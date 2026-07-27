import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-germany');
}

export default function TibiaretroWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-germany" />;
}
