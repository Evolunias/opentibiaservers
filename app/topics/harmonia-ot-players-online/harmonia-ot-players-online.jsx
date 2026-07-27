import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-players-online');
}

export default function HarmoniaOtPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-players-online" />;
}
