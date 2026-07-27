import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-with-active-players-forum');
}

export default function Tibia11WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-with-active-players-forum" />;
}
