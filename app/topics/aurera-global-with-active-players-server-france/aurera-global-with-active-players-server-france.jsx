import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-active-players-server-france');
}

export default function AureraGlobalWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-active-players-server-france" />;
}
