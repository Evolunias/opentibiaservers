import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-12-with-active-players-server');
}

export default function Coxaot12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-12-with-active-players-server" />;
}
