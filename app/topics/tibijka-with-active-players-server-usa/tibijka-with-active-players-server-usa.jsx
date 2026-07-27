import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-usa');
}

export default function TibijkaWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-usa" />;
}
