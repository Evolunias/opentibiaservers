import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-north-america');
}

export default function TibiameWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-north-america" />;
}
