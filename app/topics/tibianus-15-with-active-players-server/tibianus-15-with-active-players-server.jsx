import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-with-active-players-server');
}

export default function Tibianus15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-with-active-players-server" />;
}
