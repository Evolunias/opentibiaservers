import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-sweden');
}

export default function TibiaretroWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-sweden" />;
}
