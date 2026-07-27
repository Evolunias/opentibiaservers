import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-discord');
}

export default function WithReviewsElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-discord" />;
}
