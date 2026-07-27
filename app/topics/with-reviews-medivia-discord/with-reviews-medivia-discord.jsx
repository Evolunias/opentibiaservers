import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-discord');
}

export default function WithReviewsMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-discord" />;
}
