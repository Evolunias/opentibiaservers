import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-with-active-players-server');
}

export default function Cyntara14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-with-active-players-server" />;
}
