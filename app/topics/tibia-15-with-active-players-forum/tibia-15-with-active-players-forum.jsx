import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-forum');
}

export default function Tibia15WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-forum" />;
}
