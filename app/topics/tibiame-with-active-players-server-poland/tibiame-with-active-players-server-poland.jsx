import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-poland');
}

export default function TibiameWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-poland" />;
}
