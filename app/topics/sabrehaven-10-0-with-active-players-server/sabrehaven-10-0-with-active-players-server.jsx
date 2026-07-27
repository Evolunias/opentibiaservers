import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-with-active-players-server');
}

export default function Sabrehaven100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-with-active-players-server" />;
}
