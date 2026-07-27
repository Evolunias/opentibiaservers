import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-north-america');
}

export default function TibiaretroWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-north-america" />;
}
