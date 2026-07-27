import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-old-school-players-online');
}

export default function Tibia71OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-old-school-players-online" />;
}
