import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-with-active-players-server');
}

export default function Noxiousot15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-with-active-players-server" />;
}
