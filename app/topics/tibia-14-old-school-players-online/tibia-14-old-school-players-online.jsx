import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-old-school-players-online');
}

export default function Tibia14OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-old-school-players-online" />;
}
