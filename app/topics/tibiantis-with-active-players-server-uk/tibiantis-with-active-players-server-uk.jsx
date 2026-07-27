import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-uk');
}

export default function TibiantisWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-uk" />;
}
