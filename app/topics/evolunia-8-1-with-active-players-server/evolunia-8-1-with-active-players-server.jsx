import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-with-active-players-server');
}

export default function Evolunia81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-with-active-players-server" />;
}
