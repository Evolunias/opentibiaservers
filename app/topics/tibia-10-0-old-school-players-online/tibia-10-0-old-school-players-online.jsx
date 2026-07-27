import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-old-school-players-online');
}

export default function Tibia100OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-old-school-players-online" />;
}
