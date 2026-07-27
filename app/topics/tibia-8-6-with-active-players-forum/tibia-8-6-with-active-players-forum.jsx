import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-with-active-players-forum');
}

export default function Tibia86WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-with-active-players-forum" />;
}
