import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-players-online');
}

export default function AmeriaPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="ameria-players-online" />;
}
