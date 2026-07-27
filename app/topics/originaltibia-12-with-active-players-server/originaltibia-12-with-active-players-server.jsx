import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-with-active-players-server');
}

export default function Originaltibia12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-with-active-players-server" />;
}
