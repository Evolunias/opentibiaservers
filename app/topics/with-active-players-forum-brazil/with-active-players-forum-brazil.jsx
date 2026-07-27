import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-brazil');
}

export default function WithActivePlayersForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-brazil" />;
}
