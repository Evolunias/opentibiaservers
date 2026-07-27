import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-active-players-forum');
}

export default function Tibia76WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-active-players-forum" />;
}
