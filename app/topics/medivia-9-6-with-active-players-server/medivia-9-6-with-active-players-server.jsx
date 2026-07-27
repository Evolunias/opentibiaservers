import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-with-active-players-server');
}

export default function Medivia96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-with-active-players-server" />;
}
