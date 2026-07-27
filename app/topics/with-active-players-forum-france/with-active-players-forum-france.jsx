import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-france');
}

export default function WithActivePlayersForumFranceKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-france" />;
}
