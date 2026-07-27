import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-old-school-players-online');
}

export default function Tibia15OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-old-school-players-online" />;
}
