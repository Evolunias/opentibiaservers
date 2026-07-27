import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-north-america');
}

export default function TibiaraWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-north-america" />;
}
