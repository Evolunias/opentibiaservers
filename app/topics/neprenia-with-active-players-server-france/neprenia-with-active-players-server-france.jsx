import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-active-players-server-france');
}

export default function NepreniaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-active-players-server-france" />;
}
