import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-players-online');
}

export default function SaintsotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="saintsot-players-online" />;
}
