import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-with-active-players-server');
}

export default function Medivia13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-with-active-players-server" />;
}
