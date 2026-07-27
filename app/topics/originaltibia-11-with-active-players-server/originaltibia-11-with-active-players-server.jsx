import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-with-active-players-server');
}

export default function Originaltibia11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-with-active-players-server" />;
}
