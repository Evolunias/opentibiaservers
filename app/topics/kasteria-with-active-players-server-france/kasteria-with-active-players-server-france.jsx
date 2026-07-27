import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-france');
}

export default function KasteriaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-france" />;
}
