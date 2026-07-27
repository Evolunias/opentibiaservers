import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-sweden');
}

export default function WithActivePlayersForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-sweden" />;
}
