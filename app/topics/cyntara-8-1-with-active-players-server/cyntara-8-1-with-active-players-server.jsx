import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-with-active-players-server');
}

export default function Cyntara81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-with-active-players-server" />;
}
