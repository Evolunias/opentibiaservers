import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-active-players-server-france');
}

export default function NilotWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-active-players-server-france" />;
}
