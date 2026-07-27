import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-with-active-players-server');
}

export default function Medivia80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-with-active-players-server" />;
}
