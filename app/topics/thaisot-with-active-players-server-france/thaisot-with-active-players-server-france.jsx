import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-active-players-server-france');
}

export default function ThaisotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-active-players-server-france" />;
}
