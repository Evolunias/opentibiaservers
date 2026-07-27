import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-marolaot-discord');
}

export default function WithReviewsMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-marolaot-discord" />;
}
