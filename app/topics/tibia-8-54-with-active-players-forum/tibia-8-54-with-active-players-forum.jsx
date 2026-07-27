import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-with-active-players-forum');
}

export default function Tibia854WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-with-active-players-forum" />;
}
