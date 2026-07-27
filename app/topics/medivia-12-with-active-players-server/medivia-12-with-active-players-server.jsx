import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-with-active-players-server');
}

export default function Medivia12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-with-active-players-server" />;
}
