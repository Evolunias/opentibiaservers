import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-active-players-server-france');
}

export default function RealeraWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-with-active-players-server-france" />;
}
