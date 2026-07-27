import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-with-active-players-server');
}

export default function Medivia76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-with-active-players-server" />;
}
