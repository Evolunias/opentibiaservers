import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-online');
}

export default function HighrateTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-online" />;
}
