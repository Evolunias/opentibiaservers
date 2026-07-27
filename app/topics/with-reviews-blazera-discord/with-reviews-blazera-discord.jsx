import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-blazera-discord');
}

export default function WithReviewsBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-blazera-discord" />;
}
