import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-brazil');
}

export default function NepreniaWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-brazil" />;
}
