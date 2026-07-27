import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-with-active-players-server');
}

export default function Thaisot13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-with-active-players-server" />;
}
