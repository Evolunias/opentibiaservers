import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-0-with-active-players-server');
}

export default function Originaltibia80WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-0-with-active-players-server" />;
}
