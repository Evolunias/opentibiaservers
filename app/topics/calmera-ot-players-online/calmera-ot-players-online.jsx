import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-players-online');
}

export default function CalmeraOtPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-players-online" />;
}
