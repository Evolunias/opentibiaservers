import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-players-online');
}

export default function RealeraPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="realera-players-online" />;
}
