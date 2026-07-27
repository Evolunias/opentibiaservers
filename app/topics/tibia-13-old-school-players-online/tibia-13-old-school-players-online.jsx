import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-old-school-players-online');
}

export default function Tibia13OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-old-school-players-online" />;
}
