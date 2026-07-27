import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-with-active-players-server');
}

export default function Tibiantis12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-with-active-players-server" />;
}
