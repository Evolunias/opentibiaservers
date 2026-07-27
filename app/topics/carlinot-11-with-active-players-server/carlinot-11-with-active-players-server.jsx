import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-with-active-players-server');
}

export default function Carlinot11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-with-active-players-server" />;
}
