import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-brazil');
}

export default function KasteriaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-brazil" />;
}
