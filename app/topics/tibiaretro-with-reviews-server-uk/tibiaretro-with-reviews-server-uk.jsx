import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-uk');
}

export default function TibiaretroWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-uk" />;
}
