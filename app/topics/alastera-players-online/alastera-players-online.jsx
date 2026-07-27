import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-players-online');
}

export default function AlasteraPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="alastera-players-online" />;
}
