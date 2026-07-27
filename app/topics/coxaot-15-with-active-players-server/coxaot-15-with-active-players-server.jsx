import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-with-active-players-server');
}

export default function Coxaot15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-with-active-players-server" />;
}
