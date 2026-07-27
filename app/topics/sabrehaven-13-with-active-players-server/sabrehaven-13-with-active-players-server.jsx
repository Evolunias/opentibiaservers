import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-with-active-players-server');
}

export default function Sabrehaven13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-with-active-players-server" />;
}
