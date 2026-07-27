import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-with-active-players-server');
}

export default function Carlinot14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-with-active-players-server" />;
}
