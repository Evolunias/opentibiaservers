import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-canada');
}

export default function WithActivePlayersForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-canada" />;
}
