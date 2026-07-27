import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-players-online');
}

export default function BlazeraPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="blazera-players-online" />;
}
