import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-south-america');
}

export default function TibiaretroWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-south-america" />;
}
