import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-1-with-active-players-server');
}

export default function Sabrehaven81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-1-with-active-players-server" />;
}
