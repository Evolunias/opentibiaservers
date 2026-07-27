import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-forum');
}

export default function Tibia14WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-forum" />;
}
