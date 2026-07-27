import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-players-online');
}

export default function DemolidoresPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="demolidores-players-online" />;
}
