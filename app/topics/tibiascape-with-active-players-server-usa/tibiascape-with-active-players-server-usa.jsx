import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-usa');
}

export default function TibiascapeWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-usa" />;
}
