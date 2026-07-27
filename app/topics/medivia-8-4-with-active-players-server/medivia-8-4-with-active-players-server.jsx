import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-with-active-players-server');
}

export default function Medivia84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-with-active-players-server" />;
}
