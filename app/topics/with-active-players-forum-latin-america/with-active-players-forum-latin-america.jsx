import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-latin-america');
}

export default function WithActivePlayersForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-latin-america" />;
}
