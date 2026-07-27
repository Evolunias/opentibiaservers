import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-with-active-players-server');
}

export default function Tibiantis71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-with-active-players-server" />;
}
