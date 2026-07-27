import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-with-active-players-server');
}

export default function Tibiantis15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-with-active-players-server" />;
}
