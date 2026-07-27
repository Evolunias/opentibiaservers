import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-with-active-players-server');
}

export default function Tibiantis11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-with-active-players-server" />;
}
