import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-calmera-ot-discord');
}

export default function WithReviewsCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-calmera-ot-discord" />;
}
