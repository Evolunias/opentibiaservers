import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-with-active-players-server');
}

export default function Originaltibia100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-with-active-players-server" />;
}
