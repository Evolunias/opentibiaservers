import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-archlight-discord');
}

export default function WithReviewsArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-archlight-discord" />;
}
