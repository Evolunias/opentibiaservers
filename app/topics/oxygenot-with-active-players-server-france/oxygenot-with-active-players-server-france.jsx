import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-active-players-server-france');
}

export default function OxygenotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-active-players-server-france" />;
}
