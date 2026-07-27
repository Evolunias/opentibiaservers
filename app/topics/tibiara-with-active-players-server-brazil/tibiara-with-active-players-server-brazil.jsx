import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-brazil');
}

export default function TibiaraWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-brazil" />;
}
