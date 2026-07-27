import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-reviews-server-france');
}

export default function TibiaoriginsWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-reviews-server-france" />;
}
