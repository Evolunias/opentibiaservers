import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-canada');
}

export default function KasteriaWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-canada" />;
}
