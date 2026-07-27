import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-with-active-players-server');
}

export default function Sabrehaven76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-with-active-players-server" />;
}
