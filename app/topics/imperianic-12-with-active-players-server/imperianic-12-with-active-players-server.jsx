import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-with-active-players-server');
}

export default function Imperianic12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-with-active-players-server" />;
}
