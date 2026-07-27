import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-with-active-players-server');
}

export default function Medivia11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-with-active-players-server" />;
}
