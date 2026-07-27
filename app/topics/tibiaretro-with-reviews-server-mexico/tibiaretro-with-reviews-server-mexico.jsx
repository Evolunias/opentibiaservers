import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-mexico');
}

export default function TibiaretroWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-mexico" />;
}
