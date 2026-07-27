import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-with-active-players-server');
}

export default function Imperianic15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-with-active-players-server" />;
}
