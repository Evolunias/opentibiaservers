import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-with-active-players-server');
}

export default function Tibiantis13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-with-active-players-server" />;
}
