import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-with-active-players-server');
}

export default function Originaltibia13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-with-active-players-server" />;
}
