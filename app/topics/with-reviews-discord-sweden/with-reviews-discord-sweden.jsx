import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-discord-sweden');
}

export default function WithReviewsDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-discord-sweden" />;
}
