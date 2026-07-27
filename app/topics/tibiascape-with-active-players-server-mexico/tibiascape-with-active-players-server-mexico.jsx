import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-mexico');
}

export default function TibiascapeWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-mexico" />;
}
