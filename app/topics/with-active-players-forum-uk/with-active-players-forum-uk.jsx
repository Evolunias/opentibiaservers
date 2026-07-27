import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-uk');
}

export default function WithActivePlayersForumUkKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-uk" />;
}
