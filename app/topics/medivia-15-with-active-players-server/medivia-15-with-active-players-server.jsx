import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-with-active-players-server');
}

export default function Medivia15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-with-active-players-server" />;
}
