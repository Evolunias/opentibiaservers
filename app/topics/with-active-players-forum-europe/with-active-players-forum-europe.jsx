import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-europe');
}

export default function WithActivePlayersForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-europe" />;
}
