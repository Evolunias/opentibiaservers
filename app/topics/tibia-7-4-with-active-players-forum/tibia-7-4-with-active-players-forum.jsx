import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-active-players-forum');
}

export default function Tibia74WithActivePlayersForumKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-active-players-forum" />;
}
