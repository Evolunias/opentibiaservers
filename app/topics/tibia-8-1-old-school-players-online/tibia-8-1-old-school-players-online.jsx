import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-old-school-players-online');
}

export default function Tibia81OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-old-school-players-online" />;
}
