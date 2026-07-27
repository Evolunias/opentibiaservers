import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-15-with-active-players-server');
}

export default function Sabrehaven15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-15-with-active-players-server" />;
}
