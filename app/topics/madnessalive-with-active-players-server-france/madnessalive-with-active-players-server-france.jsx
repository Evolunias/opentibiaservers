import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-with-active-players-server-france');
}

export default function MadnessaliveWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-with-active-players-server-france" />;
}
