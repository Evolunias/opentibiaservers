import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-forum');
}

export default function Tibia12WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-forum" />;
}
