import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-usa');
}

export default function WithActivePlayersForumUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-usa" />;
}
