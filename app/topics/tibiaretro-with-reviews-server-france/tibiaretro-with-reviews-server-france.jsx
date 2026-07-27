import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-reviews-server-france');
}

export default function TibiaretroWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-reviews-server-france" />;
}
