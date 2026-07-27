import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-with-active-players-forum');
}

export default function Tibia100WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-with-active-players-forum" />;
}
