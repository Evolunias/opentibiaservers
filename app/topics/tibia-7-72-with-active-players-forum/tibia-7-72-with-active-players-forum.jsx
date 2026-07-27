import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-with-active-players-forum');
}

export default function Tibia772WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-with-active-players-forum" />;
}
