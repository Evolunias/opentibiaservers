import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-france');
}

export default function TibiantisWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-france" />;
}
