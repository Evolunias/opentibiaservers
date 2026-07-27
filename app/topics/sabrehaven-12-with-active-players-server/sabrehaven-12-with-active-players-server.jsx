import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-12-with-active-players-server');
}

export default function Sabrehaven12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-12-with-active-players-server" />;
}
