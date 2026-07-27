import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-active-players-server-france');
}

export default function ImperianicWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-active-players-server-france" />;
}
