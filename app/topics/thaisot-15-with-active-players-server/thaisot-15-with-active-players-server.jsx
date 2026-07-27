import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-with-active-players-server');
}

export default function Thaisot15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-with-active-players-server" />;
}
