import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-canada');
}

export default function TibiaraWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-canada" />;
}
