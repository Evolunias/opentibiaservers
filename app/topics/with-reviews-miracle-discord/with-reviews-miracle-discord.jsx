import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-miracle-discord');
}

export default function WithReviewsMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-miracle-discord" />;
}
