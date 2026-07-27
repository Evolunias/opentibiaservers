import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-sabrehaven-discord');
}

export default function WithReviewsSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-sabrehaven-discord" />;
}
