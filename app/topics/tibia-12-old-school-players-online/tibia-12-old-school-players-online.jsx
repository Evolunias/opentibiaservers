import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-old-school-players-online');
}

export default function Tibia12OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-old-school-players-online" />;
}
