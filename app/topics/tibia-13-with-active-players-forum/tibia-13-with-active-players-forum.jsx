import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-forum');
}

export default function Tibia13WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-forum" />;
}
