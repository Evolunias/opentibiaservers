import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-with-active-players-server');
}

export default function Sabrehaven14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-with-active-players-server" />;
}
