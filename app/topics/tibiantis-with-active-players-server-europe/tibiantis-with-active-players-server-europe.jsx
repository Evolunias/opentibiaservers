import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-active-players-server-europe');
}

export default function TibiantisWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-active-players-server-europe" />;
}
