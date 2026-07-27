import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-mexico');
}

export default function TibijkaWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-mexico" />;
}
