import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-with-active-players-server');
}

export default function Medivia100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-with-active-players-server" />;
}
