import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-with-active-players-server');
}

export default function Carlinot15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-with-active-players-server" />;
}
