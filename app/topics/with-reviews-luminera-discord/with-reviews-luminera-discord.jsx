import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-discord');
}

export default function WithReviewsLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-discord" />;
}
