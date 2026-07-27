import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-north-america');
}

export default function WithActivePlayersForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-north-america" />;
}
