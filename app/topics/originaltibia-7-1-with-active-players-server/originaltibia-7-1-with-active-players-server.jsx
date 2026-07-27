import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-with-active-players-server');
}

export default function Originaltibia71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-with-active-players-server" />;
}
