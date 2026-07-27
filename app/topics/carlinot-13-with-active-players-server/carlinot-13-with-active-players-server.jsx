import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-with-active-players-server');
}

export default function Carlinot13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-with-active-players-server" />;
}
