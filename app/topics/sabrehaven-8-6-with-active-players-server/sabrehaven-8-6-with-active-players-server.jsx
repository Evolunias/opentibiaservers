import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-with-active-players-server');
}

export default function Sabrehaven86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-with-active-players-server" />;
}
