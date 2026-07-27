import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-active-players-server-france');
}

export default function NostaltherWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-active-players-server-france" />;
}
