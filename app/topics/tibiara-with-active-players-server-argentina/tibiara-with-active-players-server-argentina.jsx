import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-argentina');
}

export default function TibiaraWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-argentina" />;
}
