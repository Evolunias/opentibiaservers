import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-canada');
}

export default function TibiaretroWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-canada" />;
}
