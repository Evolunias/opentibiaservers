import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-imperianic-discord');
}

export default function WithReviewsImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-imperianic-discord" />;
}
