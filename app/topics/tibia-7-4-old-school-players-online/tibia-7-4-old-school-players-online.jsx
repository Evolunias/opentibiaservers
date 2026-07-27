import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-old-school-players-online');
}

export default function Tibia74OldSchoolPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-old-school-players-online" />;
}
