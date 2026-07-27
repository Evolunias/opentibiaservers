import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-1-with-active-players-server');
}

export default function Medivia71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-1-with-active-players-server" />;
}
