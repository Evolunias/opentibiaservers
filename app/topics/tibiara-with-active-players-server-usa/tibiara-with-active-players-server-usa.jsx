import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-usa');
}

export default function TibiaraWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-usa" />;
}
