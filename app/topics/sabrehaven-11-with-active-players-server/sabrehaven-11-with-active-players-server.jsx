import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-with-active-players-server');
}

export default function Sabrehaven11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-with-active-players-server" />;
}
