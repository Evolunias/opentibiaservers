import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-old-school-players-online');
}

export default function Tibia86OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-old-school-players-online" />;
}
