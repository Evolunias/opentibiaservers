import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-germany');
}

export default function TibiameWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-germany" />;
}
