import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-players-online');
}

export default function MediviaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="medivia-players-online" />;
}
