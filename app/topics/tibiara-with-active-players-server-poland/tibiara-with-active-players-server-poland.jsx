import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-poland');
}

export default function TibiaraWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-poland" />;
}
