import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-usa');
}

export default function TibiantisWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-usa" />;
}
