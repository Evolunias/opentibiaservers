import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-old-school-players-online');
}

export default function Tibia11OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-old-school-players-online" />;
}
