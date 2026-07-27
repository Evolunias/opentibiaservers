import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-4-with-active-players-server');
}

export default function Sabrehaven84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-4-with-active-players-server" />;
}
