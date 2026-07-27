import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-forum-south-america');
}

export default function WithActivePlayersForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-forum-south-america" />;
}
