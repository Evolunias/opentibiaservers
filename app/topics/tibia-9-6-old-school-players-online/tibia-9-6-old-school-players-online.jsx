import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-old-school-players-online');
}

export default function Tibia96OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-old-school-players-online" />;
}
