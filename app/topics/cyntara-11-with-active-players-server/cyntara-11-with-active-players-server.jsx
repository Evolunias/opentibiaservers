import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-11-with-active-players-server');
}

export default function Cyntara11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-11-with-active-players-server" />;
}
