import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-players-online');
}

export default function ShadowcoresPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-players-online" />;
}
