import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-with-active-players-server');
}

export default function Cyntara13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-with-active-players-server" />;
}
