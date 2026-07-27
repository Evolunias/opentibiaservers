import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-argentina');
}

export default function TibijkaWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-argentina" />;
}
