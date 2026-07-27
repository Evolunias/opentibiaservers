import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-argentina');
}

export default function TibiaretroWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-argentina" />;
}
