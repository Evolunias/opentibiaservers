import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-with-active-players-server');
}

export default function Medivia14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-with-active-players-server" />;
}
