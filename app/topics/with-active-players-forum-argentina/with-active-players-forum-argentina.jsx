import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-argentina');
}

export default function WithActivePlayersForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-argentina" />;
}
