import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-players-online');
}

export default function ThaisotPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="thaisot-players-online" />;
}
