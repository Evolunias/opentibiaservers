import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-13-with-active-players-server');
}

export default function Coxaot13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-13-with-active-players-server" />;
}
