import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-with-active-players-server');
}

export default function Medivia74WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-with-active-players-server" />;
}
