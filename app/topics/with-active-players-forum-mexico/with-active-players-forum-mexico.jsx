import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-mexico');
}

export default function WithActivePlayersForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-mexico" />;
}
