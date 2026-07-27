import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-with-active-players-server');
}

export default function Cyntara100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-with-active-players-server" />;
}
