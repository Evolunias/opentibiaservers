import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-discord');
}

export default function WithReviewsMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-discord" />;
}
