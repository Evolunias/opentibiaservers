import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-active-players-server-france');
}

export default function CanobWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-with-active-players-server-france" />;
}
