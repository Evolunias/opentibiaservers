import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-with-active-players-server');
}

export default function Carlinot12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-with-active-players-server" />;
}
