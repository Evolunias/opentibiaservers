import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-active-players-server-france');
}

export default function SaintsotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-active-players-server-france" />;
}
