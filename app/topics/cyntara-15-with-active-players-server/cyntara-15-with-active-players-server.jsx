import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-with-active-players-server');
}

export default function Cyntara15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-with-active-players-server" />;
}
