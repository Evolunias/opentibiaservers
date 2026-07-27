import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-south-america');
}

export default function TibiaraWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-south-america" />;
}
