import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-france');
}

export default function TibiaraWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-france" />;
}
