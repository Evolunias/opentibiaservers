import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-with-active-players-server');
}

export default function Thaisot11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-with-active-players-server" />;
}
