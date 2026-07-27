import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-germany');
}

export default function TibiaraWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-germany" />;
}
