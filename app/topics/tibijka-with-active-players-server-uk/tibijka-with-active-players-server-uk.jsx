import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-uk');
}

export default function TibijkaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-uk" />;
}
