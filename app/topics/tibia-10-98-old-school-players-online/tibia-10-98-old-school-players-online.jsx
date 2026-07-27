import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-old-school-players-online');
}

export default function Tibia1098OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-old-school-players-online" />;
}
