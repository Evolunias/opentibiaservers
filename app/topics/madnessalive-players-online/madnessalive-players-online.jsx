import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-players-online');
}

export default function MadnessalivePlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-players-online" />;
}
