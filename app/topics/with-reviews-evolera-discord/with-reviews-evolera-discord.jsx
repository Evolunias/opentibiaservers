import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-evolera-discord');
}

export default function WithReviewsEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-evolera-discord" />;
}
