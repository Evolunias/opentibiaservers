import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-mexico');
}

export default function TibiaraWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-mexico" />;
}
