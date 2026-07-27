import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-active-players-server-argentina');
}

export default function TibiascapeWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-active-players-server-argentina" />;
}
