import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-active-players-server-europe');
}

export default function TibijkaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-active-players-server-europe" />;
}
