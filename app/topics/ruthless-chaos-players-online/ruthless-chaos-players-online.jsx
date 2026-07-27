import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-players-online');
}

export default function RuthlessChaosPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-players-online" />;
}
