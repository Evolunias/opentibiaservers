import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-with-active-players-server');
}

export default function Sabrehaven80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-with-active-players-server" />;
}
