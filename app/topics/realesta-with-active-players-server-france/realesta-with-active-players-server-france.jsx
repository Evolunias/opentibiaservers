import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-active-players-server-france');
}

export default function RealestaWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-active-players-server-france" />;
}
